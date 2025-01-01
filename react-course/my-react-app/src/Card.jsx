import profilePicture from "./assets/profilePicture.jpg";
function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePicture} alt="profile picture" />
      <h2 className="card-title">Mr. Blaze</h2>
      <p className="card-text">I am a FullStack Developer</p>
    </div>
  );
}

export default Card;
