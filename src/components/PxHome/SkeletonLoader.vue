<template>
    <div class="container">
        <div class="row" v-show="loading">
            <div class="col-xl-4 pt-5">
                <div class="card wave">
                    <div class="img"></div>
                    <div class="description"></div>
                    <div class="commentsCount"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SkeletonLoader',
        props: {
            loading: {
                type: Boolean,
                default: false,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
.card {
    width: 300px;
    height: auto;
    margin: 15px;
    padding: 10px;
    border-radius: 5px;
    background-color:rgba(116, 116, 116, 0.425);
    display:grid;
    grid-template-rows: 200px min-content min-content;
    grid-template-columns: 20% 80%;
    grid-template-areas:    "img img"
                            "description description"
                            "commentsCount commentsCount";
    row-gap: 10px;
    align-items: center;

    .img {
        grid-area: img;
        // float: left;
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }

    .description {
        grid-area: description;
        width: 60%;
        height: 20px;
        border-radius: 5px;
    }

    .commentsCount {
        grid-area: commentsCount;
        width: 30%;
        height: 20px;
        border-radius: 5px;
    }

    &.pulse div {
        animation: pulse 1s infinite ease-in-out;
        -webkit-animation: pulse 1s infinite ease-in-out;
    }
    &.wave div {
        animation: wave 1s infinite linear forwards;
        -webkit-animation: wave 1s infinite linear forwards;
        background: #f6f7f8;
        background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
        background-size: 800px 104px;
    }
    div {
        background: #E8E8E8;
    }
}

@keyframes pulse {
    0% {
        background-color: rgba(165, 165, 165, .1);
    }
    50% {
        background-color: rgba(165, 165, 165, .3);
    }
    100% {
        background-color: rgba(165, 165, 165, .1);
    }
}
@-webkit-keyframes pulse {
    0% {
        background-color: rgba(165, 165, 165, .1);
    }
    50% {
        background-color: rgba(165, 165, 165, .3);
    }
    100% {
        background-color: rgba(165, 165, 165, .1);
    }
}
@keyframes wave {
    0% {
        background-position: -468px 0
    }
    100% {
        background-position: 468px 0
    }
}
@-webkit-keyframes wave {
    0% {
        background-position: -468px 0
    }
    100% {
        background-position: 468px 0
    }
}
</style>