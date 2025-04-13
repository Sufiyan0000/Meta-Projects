export default function UserCard({ user }) {
  const { avatar_url, followers, following, name, public_repos, login } = user;

  return (
    <div className="App">
      <div className="card-container">
        <div className="img-container">
          <img src={avatar_url} alt="user-image" id="user-img" />
          <h3>
            <a href={`https://www.github.com/${login}`}>{name || login}</a>
          </h3>
        </div>

        <div>
          <div className="apply-flex">
            <h4>Public Repos : </h4>
            <h4>{public_repos}</h4>
          </div>
          <div className="apply-flex">
            <h4>Followers : </h4>
            <h4>{followers}</h4>
          </div>
          <div className="apply-flex">
            <h4>Following : </h4>
            <h4>{following}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
