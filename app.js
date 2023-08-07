new Vue({
  el: '#app',
  data: {
    phoneNumber: '',
    validationError: null,
  },
  computed: {
    isValid() {
      return this.phoneNumber.match(/^\d{10}$/);
    },
  },
  methods: {
    validatePhoneNumber() {
      if (!this.isValid) {
        this.validationError = 'Please enter a valid 10-digit phone number.';
      } else {
        this.validationError = null;
      }
    },
    submitForm() {
      // Handle form submission here, e.g., send the phone number to the server.
      console.log('Form submitted with phone number:', this.phoneNumber);
    },
  },
});
