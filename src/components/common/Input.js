import React from "react";
import PropTypes from "prop-types";
import "./Input.sass"

const Input = ({
	type,
	placeholder,
	value,
	onChange,
	onFocus,
	onBlur,
	divClassName,
	className,
	id,
	name,
	minlength,
	maxlength,
	size,
	success,
	errorText,
	error,
	disabled,
	min,
	max
}) => {
	return (
		<div className={`input-group ${divClassName ? divClassName : ''}`}>
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onFocus={onFocus}
				onBlur={onBlur}
				className={`${className} ${error ? "error" : ""}`}
				id={id}
				name={name}
				disabled={disabled}
				minLength={minlength}
				min={min}
				max={max}
			/>
			<small dangerouslySetInnerHTML={{__html: error ? errorText : null}} />
		</div>
	);
};

Input.propTypes = {
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	onChange: PropTypes.func,
	onFocus: PropTypes.func,
	onBlur: PropTypes.func,
	className: PropTypes.string,
	id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	minlength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	maxlength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	min: PropTypes.string,
	max: PropTypes.string,
	size: PropTypes.number,
	disabled: PropTypes.bool,
	errorText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	error: PropTypes.bool,
};

export default Input;
