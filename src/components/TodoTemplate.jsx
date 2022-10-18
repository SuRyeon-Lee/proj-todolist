import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
    width: 90vw;
    max-width: 800px;
    height: 85vh;

    position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
    background: white;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

    margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

    margin-top: 20px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;

    box-shadow: 0px 0px 21px 4px rgba(110, 134, 240, 0.2);;

    @media screen and (min-width: 790px) {
        height: 70vh;
        margin-top: 96px;
        flex-direction: row;
    }

`

function TodoTemplate({ children }){
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>
}

export default TodoTemplate;