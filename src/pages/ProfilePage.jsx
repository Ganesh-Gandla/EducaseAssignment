function ProfilePage() {
    return (
        <div className={"container"}>
            <h1 className="profile-header heading">Account Settings</h1>
            <div className="profile-sec">
                <img src="./profile-img.png" alt="" width={"70px"} height={"70px"} />
                <img src="./camera.svg" alt=""  className="camera-icon"/>
                <div>
                    <p className="text profile-name">Full Name</p>
                    <p className="text profile-email">My@Email.com</p>
                </div>
            </div>
                <p className="text profile-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ullam ratione repudiandae iure. Harum repellendus officiis atque incidunt iure expedita aut laboriosam odio.</p>
        </div>
    )
}

export default ProfilePage;