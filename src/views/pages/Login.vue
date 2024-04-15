<template>
  <div class="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm @submit.prevent="login">
                  <h1>Login</h1>
                  <p class="text-body-secondary">Sign In to your account</p>
                  <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <CIcon icon="cil-user" />
                    </CInputGroupText>
                    <CFormInput
                      v-model="formData.email"
                      type="email"
                      placeholder="Email"
                      autocomplete="username"
                    />
                  </CInputGroup>
                  <CInputGroup class="mb-4">
                    <CInputGroupText>
                      <CIcon icon="cil-lock-locked" />
                    </CInputGroupText>
                    <CFormInput
                      v-model="formData.password"
                      type="password"
                      placeholder="Password"
                      autocomplete="current-password"
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol :xs="6">
                      <CButton type="submit" color="primary" class="px-4">Login</CButton>
                    </CCol>
                    <CCol :xs="6" class="text-right">
                      <CButton color="link" class="px-0" @click="forgotPassword">Forgot password?</CButton>
                    </CCol>
                  </CRow>
                  <p v-if="error" class="text-danger mt-2">{{ error }}</p>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard class="text-white bg-primary py-5" style="width: 44%">
              <CCardBody class="text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>Admin System, Manage users, movies</p>
                  <CButton
                    color="light"
                    variant="outline"
                    class="mt-3"
                    @click="goToRegister"
                  >Register Now!</CButton>
                </div>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      formData: {
        email: "",
        password: ""
      },
      error: ""
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(
          "https://remi-api.onrender.com/api/v1/users/sign_in",
          {
            email: this.formData.email,
            password: this.formData.password
          }
        );

        console.log("#############", response.data);

        // Assuming the API returns a token upon successful login
        const token = response.data;

        // Store token in localStorage or Vuex state for authentication
        localStorage.setItem("accessToken", token);

        // Redirect to dashboard or other authenticated route
        this.$router.push("/dashboard");
      } catch (error) {
        this.error = "Invalid credentials. Please try again.";
      }
    },
    forgotPassword() {
      // Implement logic to handle forgot password functionality
      console.log("Forgot password clicked");
    },
    goToRegister() {
      // Redirect to registration page
      this.$router.push("/register");
    }
  }
};
</script>
