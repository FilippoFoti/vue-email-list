const {createApp} = Vue;

createApp ({
    data() {
        return {
            email: []
        }
    },
    methods: {
        emailGenerator() {
            const emailArray = [];

            for (let i = 0; i < 10; i++) {
                axios
                    .get ("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then ((resp) => {
                        emailArray.push(resp.data.response);
                        if (emailArray.length === 10) {
                            this.email = emailArray;
                        }
                    })
            }
        }
    }
}).mount ("#app");