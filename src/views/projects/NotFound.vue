<template>
  <div>
    <div class="container">
      <div class="checkbox">
        <input type="checkbox" name="check" id="check" />
        <label for="check">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="100"
            height="100"
            viewBox="0 0 100 100"
          >
            <g id="border" fill="none" stroke="#000" stroke-width="10">
              <rect x="5" y="5" width="90" height="90" rx="10" fill="none" />
            </g>
            <path
              id="arrow"
              d="M1550,970.667l14.167,14.167L1601,948l-36.833,36.833Z"
              transform="translate(-1525 -915.917)"
              fill="none"
              stroke="#08f"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="10"
            />
          </svg>
          <span>Show Layer Count</span>
        </label>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.checkbox {
  background: var(--paragraph);
  border-radius: 5px;
  user-select: none;
  input {
    display: none;
  }
  input:checked + label {
    span {
      opacity: 1;
    }
    svg {
      #arrow {
        stroke-dasharray: 172px;
        stroke-dashoffset: 0px;
      }
      #border {
        stroke-dasharray: 343px;
        stroke-dashoffset: 343px;
      }
    }
  }
  label {
    padding: 5px;
    cursor: pointer;
    display: grid;
    grid-template-columns: 20px auto;
    grid-template-rows: 20px;
    grid-gap: 10px;
    svg {
      height: 100%;
      width: 100%;

      #arrow {
        stroke-dasharray: 172px;
        stroke-dashoffset: 172px;
        transition: all 0.5s ease-in-out;
      }
      #border {
        stroke-dasharray: 343px;
        stroke-dashoffset: 0px;
        transition: all 0.5s ease-in-out;
      }
    }
    span {
      padding-right: 5px;
      opacity: 0.8;
      line-height: 20px;
    }
  }
}
</style>