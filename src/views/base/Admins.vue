<template>
  <CRow>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>User Management</strong>
        </CCardHeader>
        <CCardBody>
          <!-- Display loading spinner when 'loading' is true -->
          <CSpinner v-if="loading" />

          <!-- Display table when 'loading' is false and userList is not empty -->
          <CTable v-else-if="userList.length > 0" striped>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">#</CTableHeaderCell>
                <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                <CTableHeaderCell scope="col">Created At</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow v-for="(user, index) in userList" :key="user.id">
                <CTableHeaderCell scope="row">{{ index + 1 }}</CTableHeaderCell>
                <CTableDataCell>{{ user.id }}</CTableDataCell>
                <CTableDataCell>{{ user.email }}</CTableDataCell>
                <CTableDataCell>{{ user.created_at }}</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>

          <!-- Display message when 'loading' is false and userList is empty -->
          <p v-else>No users found.</p>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CSpinner
} from "@coreui/vue";
import axios from "axios";

export default {
  name: "Tables",
  components: {
    CRow,
    CCol,
    CCard,
    CCardHeader,
    CCardBody,
    CTable,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CTableBody,
    CTableDataCell,
    CSpinner
  },
  data() {
    return {
      userList: [], // Initialize userList to an empty array
      loading: true // Initialize loading state to true
    };
  },
  async created() {
    try {
      // Make an HTTP GET request to fetch users data
      const response = await axios.get(
        "https://remi-api.onrender.com/api/v1/admin/users?user_type=admin"
      );

      // Update the userList with the fetched user data
      this.userList = response.data; // Assuming response.data is an array of user objects
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      this.loading = false; // Set loading state to false after fetching data (whether successful or not)
    }
  }
};
</script>
