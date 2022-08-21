import Image from 'next/image';

export default function ProfileUser({ user, data }) {
    return (
        <div>
            <Image src={user.picture} alt={user.name} layout='fill'/>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    );
  }