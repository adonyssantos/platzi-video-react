const setResponse = (html, preloadedState) => {
  return `
	<!DOCTYPE html>
	<html lang="en">
	  <head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta name="description" content="Platzi Video with ReactJS" />
		<title>Platzi Video</title>
		<link href="assets/app.css" rel="stylesheet" type="text/css" />
	  </head>
	  <body>
		<div id="app">${html}</div>
		<script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c',
          )}
        </script>
		<script src="assets/app.js" type="text/javascript"></script>
	  </body>
	</html>
	`;
};

export default setResponse;