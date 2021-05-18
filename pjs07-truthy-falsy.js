// valores que son false

Boolean();
Boolean(0);
Boolean(null);
Boolean(NaN);
Boolean(undefined);
Boolean('');
Boolean(false);

// valores que son true

Boolean(' ');
Boolean('a'); // cualquier string
Boolean(1); // cualquier número excepto 0
Boolean([]); // array vacío
Boolean({}); // objeto vacío
Boolean(function () {}); // función vacía
Boolean(true);
