class Github {
  constructor() {
    this.client_id = "75e062627abcaa2ef709";
    this.client_secret = "297a51738a8d006d5a2b77ad3c71ec9fd44eaa70";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
