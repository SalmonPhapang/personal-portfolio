import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            light: {
                primary: '#E53935',
                secondary: '#1A237E',
                accent: '#FF5252',
                background: '#F5F5F5'
            }
        }
    }
});
