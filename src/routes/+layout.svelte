<script>
    import Nav from "../components/Nav.svelte";
</script>


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie DB</title>
   
</head>
<body>
    <Nav/>
    <slot></slot>
</body>
</html>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body{
        margin: 0 10%;
        background: #ececec;
        font-family: 'Roboto', sans-serif;
        }
</style>