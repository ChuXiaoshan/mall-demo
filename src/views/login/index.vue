<template>
    <div>
        <el-card class="login-form-layout">
            <el-form
                autocomplete="on"
                :model="loginForm"
                :rules="loginRules"
                ref="loginForm"
                label-position="left"
            >
                <div style="text-align: center">
                    <svg-icon
                        icon-class="login-mall"
                        style="width: 56px;height: 56px;color: #409EFF"
                    />
                </div>
                <h2 class="login-title color-main">mall-admin-web</h2>
                <el-form-item prop="username">
                    <el-input
                        name="username"
                        type="text"
                        v-model="loginForm.username"
                        autocomplete="on"
                        placeholder="请输入用户名"
                    >
                        <span slot="prefix">
                            <svg-icon icon-class="user" class="color-main" />
                        </span>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        name="password"
                        type="text"
                        v-model="loginForm.username"
                        autocomplete="on"
                        placeholder="请输入用户名"
                    >
                        <span slot="prefix" @click="showPwd">
                            <svg-icon icon-class="password" class="color-main" />
                        </span>
                        <span slot="suffix" @click="showPwd">
                            <svg-icon icon-class="eye" class="color-main" />
                        </span>
                    </el-input>
                </el-form-item>
                <el-form-item style="margin-bottom: 60px;text-align: center">
                    <el-button
                        style="width: 54%;"
                        type="primary"
                        :loading="loading"
                        @click.native.prevent="handleLogin"
                    >登录</el-button>

                    <el-button
                        style="width: 54%;"
                        type="primary"
                        @click.native.prevent="handleTry"
                    >获取体验账号</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <img :src="login_center_bg" class="login-center-layout" />
        <el-dialog title="公众号二维码" :visible.sync="dialogVisible"></el-dialog>
    </div>
</template>

<script>
export default {
    name: 'login'
}
</script>