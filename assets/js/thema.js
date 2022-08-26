function theme() {
    const dayBtn = document.querySelector('.day_btn');
    const nightBtn = document.querySelector('.night_btn');
    let el = document.documentElement;

    nightBtn.addEventListener('click', () => {
        if(el.hasAttribute ('date-theme')) {
            el.removeAttribute('date-theme');
            localStorage.removeItem('theme');
        }   
    });

    dayBtn.addEventListener('click', () => {
        if(el.hasAttribute != ('date-theme' ))  {
            el.setAttribute('date-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }   
    });

    // if(localStorage.getItem('theme') !== null) {
    //     el.setAttribute('date-theme', 'dark');
    // }
}
theme();


function themeMob() {
    const toggleTheme = document.querySelectorAll('.themeBtn');
    let el = document.documentElement;
    toggleTheme.forEach(btn => {
        btn.addEventListener('click', () => {
            if(el.hasAttribute('date-theme')) {
                el.removeAttribute('date-theme');
                localStorage.removeItem('theme');
            } else {
                el.setAttribute('date-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }   
        });
    })

    if(localStorage.getItem('theme') !== null) {
        el.setAttribute('date-theme', 'dark');
    }
}
themeMob();