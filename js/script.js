new Vue({
    el: "#app",
    data: {
        message: 'Hello World',
        image: 'https://unsplash.it/600/300?image=',
        name: '',
    },
    methods: {
        saluta : function () {
            alert(`Ciao ${this.name}`);
        }
    }
});