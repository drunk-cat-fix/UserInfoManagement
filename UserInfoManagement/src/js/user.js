Vue.createApp({
    data() {
        return {
            users: [
                {
                    id: 12111,
                    name: 'test',
                    age: 18,
                    gender: 'male',
                    email: 'fafasdf',
                }
            ],
            user: {
                id: null,
                name: '',
                age: null,
                gender: 'male',
                email: '',
            },
            operatingUserIndex: undefined,
            prompt:null,
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
                this.prompt='No Users';
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
        delAll() {

        },

    },
}).mount('.container');