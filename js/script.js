new Vue({
    el: "#app",
    data: {
        message: 'Hello World',
        image: 'https://unsplash.it/300/300?image=',
        name: '',
        color: '',
    },
    methods: {
        sayHello: function () {
            alert(`Ciao ${this.name}`);
        },
    }
});