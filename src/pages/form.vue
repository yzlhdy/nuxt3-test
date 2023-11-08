<template>
	<div class="p-c w-[500px] bg-white shadow rounded-md p-4">
		<n-form>
			<n-form-item path="fullName" label="Full name" v-bind="fullName">
				<n-input v-bind="fullName" />
			</n-form-item>

			<n-form-item path="email" label="Email" v-bind="email">
				<n-input v-bind="email" type="text" />
			</n-form-item>

			<n-form-item path="password" label="Password" v-bind="password">
				<n-input v-bind="password" type="password" />
			</n-form-item>

			<n-form-item path="passwordConfirm" label="Password confirmation" v-bind="passwordConfirm">
				<n-input v-bind="passwordConfirm" type="password" />
			</n-form-item>

			<n-form-item path="type" label="Account type" v-bind="type">
				<n-select v-bind="type" :options="options" />
			</n-form-item>

			<n-form-item path="terms" label="" v-bind="terms">
				<n-checkbox v-bind="terms">
					I agree to terms and conditions
				</n-checkbox>
			</n-form-item>

			<n-row :gutter="[0, 24]">
				<n-col :span="24">
					<div style="display: flex; gap: 4px">
						<n-button round type="primary" @click="onSubmit"> Submit </n-button>
						<n-button round type="success" @click="resetForm()">
							Reset
						</n-button>
					</div>
				</n-col>
			</n-row>
		</n-form>
	</div>
</template>

<script lang="ts" setup>
import * as yup from "yup";
import { useForm } from "vee-validate";
const schema = yup.object({
	email: yup.string().required().email().label("Email address"),
	fullName: yup.string().required().label("Full name"),
	password: yup.string().required().min(6).label("Password"),
	passwordConfirm: yup
		.string()
		.required()
		.oneOf([yup.ref("password")], "Passwords must match")
		.label("Password confirmation"),
	terms: yup
		.boolean()
		.required()
		.isTrue("You must agree to terms and conditions")
		.label("terms agreement"),
	type: yup.string().required().label("Account type"),
});

const { defineComponentBinds, handleSubmit, resetForm, errors, values } =
	useForm({
		validationSchema: schema,
		initialValues: {
			email: "",
			password: "",
			fullName: "",
			passwordConfirm: "",
			type: "",
			terms: false,
		},
	});

const naiveConfig = (state: any) => ({
	model: "value",
	props: {
		validationStatus: state.errors[0] ? "error" : undefined,
		feedback: state.errors[0],
	},
});

const naiveCheckboxConfig = (state: any) => ({
	model: "checked",
	props: {
		validationStatus: state.errors[0] ? "error" : undefined,
		feedback: state.errors[0],
	},
});

const fullName = defineComponentBinds("fullName", naiveConfig);
const email = defineComponentBinds("email", naiveConfig);
const password = defineComponentBinds("password", naiveConfig);
const passwordConfirm = defineComponentBinds("passwordConfirm", naiveConfig);
const terms = defineComponentBinds("terms", naiveCheckboxConfig);
const type = defineComponentBinds("type", naiveConfig);

const onSubmit = handleSubmit((values) => {
	console.log("Submitted with", values);
});

const options = ["Enterprise", "Pro", "Freelance"].map((t) => ({
	label: t,
	value: t,
}));
</script>

<style></style>
