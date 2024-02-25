<template>
    <div>
        <DashMainLayout>
            <DashStats></DashStats>
        </DashMainLayout>
    </div>
</template>    

<script>
import DashMainLayout from '@/components/layouts/dashminLayout/DashMainLayout.vue';
import DashStats from '@/components/admin/DashStats.vue'

export default {
    components: {
        DashMainLayout,
        DashStats,
    },
};
</script>

<style scoped>
</style>