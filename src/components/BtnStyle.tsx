import React from 'react';

type BtnStyleProps = {
    btnStyle: React.CSSProperties
}

const BtnStyle = (props: BtnStyleProps) => {
    return (
        <div style={props.btnStyle}>
            Button Style
        </div>
    );
};

export default BtnStyle;