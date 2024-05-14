
function Copyright() {
  return (
    <p className="m-0 text-center">
      {'© 2022-'}
      {new Date().getFullYear()}
      {' Allneko Club Inc.'}
    </p>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto py-3 bg-dark">
      <div className="container">
        <Copyright />
      </div>
    </footer>
  );
}