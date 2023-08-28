new Vue({
    el: '#app',
    data: {
        nombre: '',
        promedio: 0,
        lista: []
    },
    methods: {
        agregarnota: function() {
            let estado = '';
            let estadoColor = '';
            if (this.promedio >= 7) {
                estado = 'Aprobado';
                estadoColor = 'green';
            } else {
                estado = 'Reprobado';
                estadoColor = 'red';
            }

            this.lista.push({
                nombre: this.nombre,
                promedio: this.promedio,
                estado: estado,
                estadoColor: estadoColor
            });

            this.nombre = '';
            this.promedio = 0;
        }
    }
});

