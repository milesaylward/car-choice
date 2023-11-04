<template>
  <div class="form-input col-12" :class="[classes, type, { focus }]">
    <component
      :is="wrapperEl"
      :id="name"
      :required="required"
      :name="label"
      :type="type"
      rows="3"
      :value="value"
      @input="handleChange"
      @change="handleChange"
      @focus="isFocused = true;"
      @blur="isFocused = false;"
      v-if="type !== 'select'"
    />
    <select
      v-else
      :id="name"
      :required="required"
      @input="handleChange"
      :value="value"
      @change="handleChange"
      @focus="isFocused = true;"
      @blur="isFocused = false;"
    >
      <option selected disabled v-if="options.length"></option>
      <option v-for="opt in options" :value="opt">{{ opt }}</option>
    </select>
    <label for="first_name">{{ inputLabel }}</label>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  value: { required: true },
  name: { type: String, required: true },
  label: { type: String, required: true },
  required: { default: true },
  fullWidth: { default: false },
  type: { type: String, default: 'text' },
  options: { type: Array as PropType<Array<string>> , default: [] }
});


const wrapperEl = computed(() => {
  if (props.type === 'text-area') return 'textarea';
  if (props.type === 'select') return 'select';
  return 'input';
});
const classes = computed(() => !props.fullWidth ? 'col-md-6' : '');
const inputLabel = computed(() => props.required ? `${props.label}*` : props.label);
const isFocused = ref(false);
const focus = computed(() => isFocused.value || props.value);
const emit = defineEmits(['change']);
const handleChange = (e: Event) => {
  const { value } = e.target as HTMLFormElement;
  const { name } = props;
  emit('change', { value, name });
}
</script>

<style lang="scss">
.form-input {
  position: relative;
  padding: 0 24px;
  margin-bottom: 40px;
  label {
    position: absolute;
    pointer-events: none;
    top: 18px;
    transform: translateY(-50%);
    opacity: 0.5;
    left: 24px;
    transform-origin: left center;
    transition: transform 400ms $authenticMotion;
  }
  &.focus {
    label {
      transform: translateY(calc(-100% - 18px)) scale(0.75);
    }
  }
  &.text-area {
    margin-top: 12px;
    label {
      left: 36px;
    }
    &.focus {
      label {
        transform: translate(-12px, calc(-100% - 24px)) scale(0.75);
      }
    }
  }
  input, textarea {
    width: 100%;
    background: none;
    border: none;
    border-bottom: 1px solid $ghost-white;
    padding: 0;
    appearance: none;
    color: $ghost-white;
    height: 36px;
    &:focus {
      outline: none;
    }
    &::-webkit-calendar-picker-indicator {
      filter: invert(94%) sepia(24%) saturate(465%) hue-rotate(181deg) brightness(99%) contrast(95%);
    }
  }
  input[type='date']:not(:focus):in-range::-webkit-datetime-edit-year-field,
  input[type='date']:not(:focus):in-range::-webkit-datetime-edit-month-field,
  input[type='date']:not(:focus):in-range::-webkit-datetime-edit-day-field,
  input[type='date']:not(:focus):in-range::-webkit-datetime-edit-text {
    color: transparent;
    transition: color 300ms $authenticMotion;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:focus {
      transition: background-color 600000s 0s, color 600000s 0s;
  }
  input[data-autocompleted] {
      background-color: transparent !important;
  }
  input[type='date']::-webkit-datetime-edit-year-field,
  input[type='date']::-webkit-datetime-edit-month-field,
  input[type='date']::-webkit-datetime-edit-day-field,
  input[type='date']::-webkit-datetime-edit-text {
    transition: color 300ms $authenticMotion 400ms;
  }
  textarea {
    border: 1px solid $ghost-white;
    padding: 12px;
    height: auto;
    color: $ghost-white;
  }
  select {
    width: 100%;
    background: none;
    border: none;
    border-bottom: 1px solid $ghost-white;
    padding: 0 0px;
    height: 36px;
    color: $ghost-white;
    &:focus {
      outline: none;
    }
  }
}
</style>