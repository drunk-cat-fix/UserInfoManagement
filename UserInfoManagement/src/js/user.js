Vue.createApp({
    data() {
        return {
            users: [],
            user: {
                id: null,
                name: '',
                age: null,
                gender: 'male',
                email: '',
            },
            operatingUserIndex: undefined,
        }
    },
    methods: {
        addUser() {
            this.user.id = this.generateId();
            this.users.push(this.user);
            this.resetUser();
            $(this.$refs.add).modal('hide');
        },
        generateId() {
            // Utilise timestamp to generate unique user id.
            // TimeStamp + 4 positions of random number.
            let random = '';
            for (let i = 0; i < 4; i++) {
                random += (Math.floor(Math.random() * 10));
            }
            return new Date().getTime() + random;
        },
        resetUser() {
            this.user = {
                id: null,
                name: '',
                age: null,
                gender: 'male',
                email: '',
            };
        },
        delUser() {
            if (this.operatingUserIndex === -1) {
                this.users = [];
                this.prompt = 'No Users';
            } else {
                this.users.splice(this.operatingUserIndex, 1);
            }
        },
        modifyUser() {
            // this.resetUser();
            for (let index in this.users) {
                if (this.users[index].id === this.user.id) {
                    this.users.splice(index, 1, this.user);
                    this.resetUser();
                    break;
                }
            }
        },

    },
    watch: {
        // Monitor the users`s modification
        users: {
            handler: newValue => {
                localStorage.setItem('users', JSON.stringify(newValue));
            },
            deep: true,
        }
    },
    mounted() {
        // Once the programme has been mounted, then read data from local storage
        let data = localStorage.getItem('users');
        if (data !== null) {
            this.users = JSON.parse(data);
        }

    },
}).mount('.container');