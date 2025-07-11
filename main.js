// Only fetch profile info (no repositories)
const username = "oyebiyisunday";

// Fetch profile info
fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(profile => {
        document.getElementById('avatar').src = profile.avatar_url;
        document.getElementById('name').textContent = profile.name || profile.login;
        document.getElementById('github-link').href = profile.html_url;
    })
    .catch(error => {
        console.error("Error fetching GitHub profile:", error);
    });