<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminPanelController extends Controller
{
    function store(Request $request)
    {
        // create transaction
        DB::beginTransaction();

        $reindeerList = User::get();
        $validationRules = [];

        foreach ($reindeerList as $reindeer) {
            $validationRules['reindeer-' . $reindeer->id] = [
                'present',
                'nullable',
                'string',
                'max:255',
                'exists:users,id',
                function ($attribute, $value, $fail) use ($reindeer) {
                    if ($reindeer->id === $value) {
                        $fail("$attribute : Un renne ne peut pas être son propre raqouc.");
                    }
                },
                function ($attribute, $value, $fail) use ($request) {
                    foreach ($request->all() as $key => $requestValue) {
                        if($key !== $attribute && str_starts_with($key, 'reindeer-') && $requestValue === $value) {
                            $fail("$attribute : Un renne ne peut pas être le raqouc de plusieurs autres rennes.");
                        }
                    }
                },
            ];
        }

        $request->validate($validationRules);

        foreach ($reindeerList as $reindeer) {
            $reindeer->raqouc_id = null;
            $reindeer->save();
        }

        foreach ($reindeerList as $reindeer) {
            if ($request->input('reindeer-' . $reindeer->id) !== null) {
                $reindeer->raqouc_id = $request->input('reindeer-' . $reindeer->id);
                $reindeer->save();
            }
        }

        // commit transaction
        DB::commit();

        return $this->index();
    }

    function index()
    {
        $reindeerList = User::get();
        $reindeerList->each(function ($reindeer) use ($reindeerList) {
            $reindeer->availableRaqouc = $reindeerList->filter(function ($raqouc) use ($reindeer) {
                return $raqouc->id !== $reindeer->id;
            });
        });
        return view('admin-panel', compact('reindeerList'));
    }
}
