function initFunc() {

    return {

        small: 0,
        medium: 0,
        large: 0,
        total: 0,
        closePay: true,
        isShowing: false,
        finalMessage: "",
        showMessage: false,
        userPrice: 0,

        increaseSmall: function (small) {
            this.small += 199;
            this.total = this.small + this.medium + this.large;
        },

        increaseMedium: function (medium) {
            this.medium += 199;
            this.total = this.small + this.medium + this.large;
        },

        increaseLarge: function (large) {
            this.large += 199;
            this.total = this.small + this.medium + this.large;
        },

        decreaseSmall: function (small) {
            if (this.small > 0) {
                this.small -= 199;
                this.total = this.small + this.medium + this.large;
            }
        },

        decreaseMedium: function (medium) {
            if (this.medium > 0) {
                this.medium -= 199;
                this.total = this.small + this.medium + this.large;
            }
        },

        decreaseLarge: function (large) {
            if (this.large > 0) {
                this.large -= 199;
                this.total = this.small + this.medium + this.large;
            }
        },

        checkOut: function () {
            this.isShowing = !this.isShowing;
        },

        pay: function () {
            this.showMessage = true;
            this.closePay =  false;
            if (this.userPrice < this.total) {
                this.finalMessage = "Indequate funds";
            } else if(this.userPrice > this.total) {
                var p = this.userPrice-this.total;
                this.finalMessage = "Purchase CompletedSucessfully and your balance is R"+p;
            }else{
                this.finalMessage = "Purchase Completed Sucessfully";
            }
        }

    };
}