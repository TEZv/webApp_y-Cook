import useInput from "../../hooks/use-input";
import Button from "../UI/Buttons/Button";
import InvertedButton from "../UI/Buttons/InvertedButton";
import Input from "../UI/Input/Input";

const isNonEmpty = (value) => value.trim().length > 0;
const isValidZIP = (value) => !isNaN(value) && value.trim().length == 5;
const isValidEmail = (value) =>
  isNonEmpty(value) && value.includes("@") && value.includes(".");

const Checkout = (props) => {
  const {
    value: firstNameValue,
    valid: firstNameIsValid,
    invalid: firstNameIsInvalid,
    valueChangeHandler: firstNameChangeHandler,
    blurChangeHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput(isNonEmpty);

  const {
    value: lastNameValue,
    valid: lastNameIsValid,
    invalid: lastNameIsInvalid,
    valueChangeHandler: lastNameChangeHandler,
    blurChangeHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput(isNonEmpty);

  const {
    value: emailValue,
    valid: emailIsValid,
    invalid: emailIsInvalid,
    valueChangeHandler: emailChangeHandler,
    blurChangeHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(isValidEmail);

  const {
    value: ZIPValue,
    valid: ZIPIsValid,
    invalid: ZIPIsInvalid,
    valueChangeHandler: ZIPChangeHandler,
    blurChangeHandler: ZIPBlurHandler,
    reset: ZIPReset,
  } = useInput(isValidZIP);

  const {
    value: addressValue,
    valid: addressIsValid,
    invalid: addressIsInvalid,
    valueChangeHandler: addressChangeHandler,
    blurChangeHandler: addressBlurHandler,
    reset: addressReset,
  } = useInput(isNonEmpty);

  const formIsValid =
    firstNameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    ZIPIsValid &&
    addressIsValid;

  const submitHandler = (event) => {
    if (!formIsValid) return;
    event.preventDefault();

    props.onOrder({
      firstName: firstNameValue,
      lastName: lastNameValue,
      email: emailValue,
      ZIP: ZIPValue,
      address: addressValue
    });

    firstNameReset();
    lastNameReset();
    emailReset();
    ZIPReset();
    addressReset();
  };

  return (
    <form className="flex flex-col space-y-6" onSubmit={submitHandler}>
      <div className="flex flex-col lg:flex-row justify-between space-y-2 items-baseline">
        <label htmlFor="first-name">First Name:</label>
        <Input
          id="first-name"
          type="text"
          value={firstNameValue}
          invalid={firstNameIsInvalid}
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler}
        />
        <label htmlFor="last-name">Last Name:</label>
        <Input
          id="last-name"
          type="text"
          value={lastNameValue}
          invalid={lastNameIsInvalid}
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-between space-y-2 items-baseline">
        <label htmlFor="email">Email Address:</label>
        <Input
          id="email"
          type="email"
          value={emailValue}
          invalid={emailIsInvalid}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        <label htmlFor="zip">ZIP Code (Postal):</label>
        <Input
          id="zip"
          type="text"
          value={ZIPValue}
          invalid={ZIPIsInvalid}
          onChange={ZIPChangeHandler}
          onBlur={ZIPBlurHandler}
        />
      </div>
      <label className="self-center" htmlFor="address">Address:</label>
      <Input
        id="address"
        type="text"
        className="lg:w-2/3"
        value={addressValue}
        invalid={addressIsInvalid}
        onChange={addressChangeHandler}
        onBlur={addressBlurHandler}
      ></Input>
      <div className="flex space-x-2 self-center">
        <InvertedButton
          type="button"
          className="w-24"
          onClick={props.onEditOrder}
        >
          Edit Order
        </InvertedButton>
        <Button type="submit" className="w-32">
          Confirm Order
        </Button>
      </div>
    </form>
  );
};

export default Checkout;
