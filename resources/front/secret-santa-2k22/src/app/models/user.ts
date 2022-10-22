export class User {
  public readonly id: number;
  public readonly username: string;
  public readonly name: string;
  public readonly created_at: Date;
  public readonly updated_at: Date;
  public readonly reindeer: string;

  constructor({
                id,
                username,
                name,
                created_at,
                updated_at,
                reindeer
              }: { id: number; username: string; name: string; created_at: string; updated_at: string; reindeer: string }) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.created_at = new Date(created_at);
    this.updated_at = new Date(updated_at);
    this.reindeer = reindeer;
  }

}
