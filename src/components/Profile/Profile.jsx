import { ProfileStyle } from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
<ProfileStyle>
  <div className="profile">
    <div className="description">
      <img
        src={avatar}
        alt="User avatar"
        className="avatar"
      />
      <p className="name">{username}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className="stats">
      <li className='stats-title'>
        <span className="label">Followers</span>
        <span className="quantity"> {followers}</span>
      </li>
      <li className='stats-title'>
        <span className="label">Views</span>
        <span className="quantity"> {views}</span>
      </li>
      <li className='stats-title'>
        <span className="label">Likes</span>
        <span className="quantity"> {likes}</span>
      </li>
    </ul>
    </div>
    </ProfileStyle>
);

