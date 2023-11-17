const ProfileCart = () => {
    return (
        <div className="bg-white shadow w-300 p-20 text-center rounded-10">
            <img src="images/profile-picture.jpg" alt="Your Name" className="w-125 h-153 rounded-full " />

            <div class="profile-info"><h1>Your Name</h1>
                <p>Your Profession or Tagline</p>
                <p><strong>About me:</strong> Brief description or bio goes here.</p>
                <p><strong>Skills:</strong>Skill 1, Skill 2, Skill 3</p>
                <p><strong>Contact:</strong> <a href="mailto:your.email@example.com">your.email2example.com</a></p>
            </div>
        </div>
    );
}