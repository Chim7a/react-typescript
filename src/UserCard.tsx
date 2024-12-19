import { UserCardItem } from "./Interface";

function UserCard({
  name,
  age,
  numb_of_kids,
  contactInfo,
  marital_stat,
  image,
}: UserCardItem) {
  return (
    <div>
      <img src={image} alt={name} />
      <h1>My name: {name}</h1>
      <h2>My age: {age}</h2>
      <h4>Number of kids: {numb_of_kids}</h4>
      <h4>Marital status: {marital_stat}</h4>
      <h4>Contact Info: {contactInfo.address}</h4>
    </div>
  );
}

export default UserCard;
