import React from 'react';

//type of children
type ButtonProps = {
    children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
    return (
        <div>
            <button>{props.children}</button>;
        </div>
    );
};

export default Button;