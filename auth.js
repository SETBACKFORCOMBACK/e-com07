// Authentication Utility Functions

// Check if user is logged in
function isAuthenticated() {
    return supabase.auth.getSession().then(({ data: { session } }) => {
        return session !== null;
    });
}

// Get current user
async function getCurrentUser() {
    const { data: { session } } = await supabase.auth.getSession();
    return session?.user || null;
}

// Sign up new user
async function signUp(email, password) {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password
    });
    return { data, error };
}

// Sign in user
async function signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    });
    return { data, error };
}

// Sign out user
async function signOut() {
    const { error } = await supabase.auth.signOut();
    return { error };
}

// Listen to auth state changes
function onAuthStateChange(callback) {
    supabase.auth.onAuthStateChange((event, session) => {
        callback(event, session);
    });
}

// Update UI based on auth state
async function updateAuthUI() {
    const user = await getCurrentUser();
    const loginBtn = document.getElementById('login-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const userEmail = document.getElementById('user-email');
    
    if (user) {
        if (loginBtn) loginBtn.classList.add('hidden');
        if (logoutBtn) logoutBtn.classList.remove('hidden');
        if (userEmail) {
            userEmail.textContent = user.email;
            userEmail.classList.remove('hidden');
        }
    } else {
        if (loginBtn) loginBtn.classList.remove('hidden');
        if (logoutBtn) logoutBtn.classList.add('hidden');
        if (userEmail) userEmail.classList.add('hidden');
    }
}

// Initialize auth state listener
document.addEventListener('DOMContentLoaded', function() {
    updateAuthUI();
    onAuthStateChange((event, session) => {
        updateAuthUI();
    });
});

