var header = new v({
    el: ".ba_header-main",
    methods: {
        toggleNavMob() {
            const mobileNavMenu = document.querySelector('.main-navigation');

            mobileNavMenu.classList.add('left-0')

        }
    },
})