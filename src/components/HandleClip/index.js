import React, { useEffect, useState, useRef } from 'react';
import styles from './index.module.css';
const HandleClip = (prop) => {
    const { cardOverrideRef, updateParentHanldeLeft } = prop;

    const [isDrop, setIsDrop] = useState(false)
    const [disx, setDisx] = useState()
    const [disy, setDisy] = useState()
    const [moveX, setmoveX] = useState(0)
    const [hanldeLeft, setHanldeLeft] = useState(-16)
    const handle_ref = useRef();
    window.onmouseup = function () {

        setIsDrop(false);
    }
    window.onmousemove = function (event) {

        if (isDrop) {


            //pageX 属性返回鼠标指针的水平坐标（相对文档
            const left = (event.pageX - disx)

            const borderDistanceLeft = left - cardOverrideRef.current.clientWidth + 16;

            if (borderDistanceLeft < 0) {
                setHanldeLeft(left)
                updateParentHanldeLeft(left)
            }



        }
    }

    const handleOnMouseDown = (event) => {

        setmoveX(moveX)

        const disx = event.pageX - handle_ref.current.offsetLeft

        const disy = event.pageY - handle_ref.current.offsetTop

        setDisx(disx);
        setDisy(disy);

        setIsDrop(true);
    }


    return (<>



        <div className={styles.handle_container}>
            <div className={styles.handle_bar_container}>
                <div className={styles.handle_root} ref={handle_ref} onMouseDown={handleOnMouseDown} style={{ left: `${hanldeLeft}px` }}>

                    <div className={styles.handle_line} ></div>
                    <div className={styles.handle_button} >
                        <div className={styles.handle_arrow_left}></div>
                        <div className={styles.handle_arrow_right}></div>
                        <div></div>
                        {/* <div style="width: 0px; height: 0px; border-top: 8px solid transparent; border-right: 10px solid; border-bottom: 8px solid transparent;"></div>
                <div style="width: 0px; height: 0px; border-top: 8px solid transparent; border-right: 10px solid; border-bottom: 8px solid transparent; transform: rotate(180deg);"></div> */}
                    </div>
                    <div className={styles.handle_line} ></div>

                </div>
            </div>

        </div>
    </>)
}

export default HandleClip;