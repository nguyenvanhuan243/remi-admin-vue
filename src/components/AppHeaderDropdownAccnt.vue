<template>
  <CDropdown placement="bottom-end" variant="nav-item">
    <CDropdownToggle class="py-0 pe-0" :caret="false">
      <CAvatar :src="avatar" size="md" />
    </CDropdownToggle>
    <CDropdownMenu class="pt-0">
      <CDropdownHeader
        component="h6"
        class="bg-body-secondary text-body-secondary fw-semibold my-2"
      >Settings</CDropdownHeader>
      <CDropdownItem>
        <CIcon icon="cil-user" />Profile
      </CDropdownItem>
      <CDropdownItem>
        <CIcon icon="cil-settings" />Settings
      </CDropdownItem>
      <CDropdownItem>
        <CIcon icon="cil-dollar" />Payments
        <CBadge color="secondary" class="ms-auto">{{ itemsCount }}</CBadge>
      </CDropdownItem>
      <CDropdownItem>
        <CIcon icon="cil-file" />Projects
        <CBadge color="primary" class="ms-auto">{{ itemsCount }}</CBadge>
      </CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem @click="logout">
        <CIcon icon="cil-lock-locked" />Logout
      </CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>

<script>
import { defineComponent } from "vue"; // Import defineComponent for composition API
import avatar from "@/assets/images/avatars/8.jpg";

export default defineComponent({
  name: "AppHeaderDropdownAccnt",
  setup() {
    const itemsCount = 42;

    const logout = () => {
      localStorage.removeItem("adminAccessToken");
      window.location.href = "/login"; // Change '/login' to your actual login page URL
    };

    return {
      avatar: avatar,
      itemsCount,
      logout
    };
  }
});
</script>
