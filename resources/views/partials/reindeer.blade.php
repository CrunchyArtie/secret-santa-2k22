<tr>
    <td>
        {{$reindeer->id}}
    </td>
    <td>
        {{$reindeer->name}}
    </td>
    <td>
        {{$reindeer->created_at}}
    </td>
    <td>
        {{$reindeer->updated_at}}
    </td>
    <td>
        {{$reindeer->username}}
    </td>
    <td>
        {{$reindeer->reindeer}}
    </td>
    <td>
        {{$reindeer->raqouc->name ?? '(Aucun)'}}
        <label for="reindeer-{{$reindeer->id}}">
            <select id="reindeer-{{$reindeer->id}}" name="reindeer-{{$reindeer->id}}">
                <option value=""></option>
                @foreach($reindeer->availableRaqouc as $raqouc)
                    <option
                        value="{{$raqouc->id}}" {{ (old("reindeer-" . $reindeer->id) === $raqouc->id.'') || ($reindeer->raqouc !== null && $reindeer->raqouc->id === $raqouc->id) ? 'selected' : ''}}>{{$raqouc->name}}</option>
                @endforeach
            </select>
        </label>
    </td>
</tr>
