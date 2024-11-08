{
    interface Profile {
        name: string;
        age: number;
        email: string;
    }
    
    function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
        return { ...profile, ...updates };
    }
    
    // Sample Input
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 26 }));
    
    // Sample Output:
    // { name: "Alice", age: 26, email: "alice@example.com" }
    
}