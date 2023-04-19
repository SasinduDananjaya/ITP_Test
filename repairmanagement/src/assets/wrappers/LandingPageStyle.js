import styled from "styled-components"

const Wrapper = styled.main`

Wrapper{
    color: #020d2c;
}
nav{
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    margin-top: 3.2rem;
    height: var(--nav-height);
    display: flex;
    align-items: center;
    
    img{
        border-radius: 30%;
        width:200px;
        height:200px;
    }

}

.page{
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
}

h1{
    font-weight: 700;
    color: white;
    span{
        color: #e65c00;
    }
}

p{
    color: white;
}

.main-img{
    display: none;
}

@media (min-width: 992px){
    .page{
        grid-template-columns: 1fr 1fr;
        column-gap: 3rem;
    }

    .main-img{
        display: block;
    }
}
`

export default Wrapper