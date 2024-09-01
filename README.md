TECHSTACK
-FRONTEND
-> REACTJS
-> npm v. 10.5.0
-> node v. 20.12.0

-BACKEND 
->composer v. 2.7.2
->php v. 8.1.10

-COLOR CODE/ COLOR SCHEMES
bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%
#000000
#ffffff
bg-zinc-100 
bg-zinc-400

1. CREATE BACKEND PROJECT USING LARAVEL 10
-> composer create-project laravel/laravel backend_laravelPHP
2.ADD CONTROLLER WITH API AUTOCOMPLETE CLASS(INDEX, CREATE, UPDATE, DELETE, SHOW)
-> php artisan make:controller AuthController --api
3. ADD MIGRATIONS
->php artisan make:model student -mfsr
4. ADD MIGRATIONS AND MODELS 
->after adding in the fillable and in the model fields 
-> php artisan migrate 
5. view the routes for api 
php artisan route:list --path=api
6. ADD FRONTEND USING REACTJS AND VITE BUNDLER AND DAISYUI PLUGINS FRAMEWORK FOR TAILWINDCSS
->npm create vite@latest frontend_reactJS -- --template react
->npm i
7. install packages usable 
-> npm i axios react-router-dom react-toastify react-icons redux react-redux redux-thunk react-hot-toast
8. INSTALL TAILWINDCSS USING VITE BUNDLER
->npm install -D tailwindcss postcss autopref
->npx tailwindcss init -p
--------------------------------------
index.css removed the default
--------------------------------------
@tailwind base;
@tailwind components;
@tailwind utilities;
--------------------------------------
9. INSTALL DAISYUI AS A PLUGGIN
-> npm i -D daisyui@latest
10. INSTALL LARAVEL-SANCTUM FOR AUTHENTICATION
->composer require laravel/sanctum
->php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
->kernel.php 
->       'api' => [
            \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
            \Illuminate\Routing\Middleware\ThrottleRequests::class.':api',
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],

10. INSTALL EMOJI FOR THE TOASTER 
->npm i emoji-picker-react
11. MAKE AN UPLOAD IMG
 ->working 
 -> composer update
 -> composer dump-autoload

12. INSTALL GENERATE TABLE TO EXCEL 
npm i react-html-table-to-excel (deprecated)

13. INSTALL REACTJS-CHART-2
npm i react-chartjs-2

14. CREATE TABLE FOR DEPARTMENT

15. INSTALL react-html-table-to-excel packages -not installed naay dependencies
->npm i --save react-html-table-to-excel

16. INSTALL A CHART
npm i --save chart.js react-chartjs-2
npm install react-chartjs-2@latest
->npm install react-redux redux react-chartjs-2 chart.js

17. INSTALL REACT-DATA-TABLE-COMPONENT 
->npm i react-data-table-component (dili nata kailangan mag query gamit LIKE as logical operator para e search niya if naa ba na data or wala)

18. ADD IMAGES USING STORAGE OF LARAVEL
->php artisan storage:link
19. INSTALL ReactHTMLTableToExcel 
->npm install --save react-html-table-to-excel-3

20. INSTALL QRCODE FOR LARAVEL 
->composer require simplesoftwareio/simple-qrcode (ERROR NI)
21. INSTALL QRCODE GAMIT BACON
->composer require bacon/bacon-qr-code

22. INSTALL ENDROID/QR-CODE (WALAY NEED emagick)
->composer require endroid/qr-code
->composer clear-cache
->composer dump-autoload
->composer remove endroid/qr-code
->composer require endroid/qr-code

23. INSTALL QUICK-RESPONSE CODE READER IN REACTJS -HAS ERROR
->npm i react-qr-code //HAS ERROR
24. INSTALL ANOTHER QR-CODE READER FOR REACTJS
->npm i qr-scanner 
25. ADD A REACT-ROUTER-DOM FOR QRCODE READER IN REACTJS 
->npm install react-router-dom qr-scanner
26. ADD AND IMPORT THE MODULE IN THE ROOT FOLDER (SRC)
27. ADD PAYROLL CONTROLLER, MIGRATIONS, SEEDERS, FACADES 
28. ADD RATE CONTROLLER, MIGRATIONS, SEEDERS, FACADES
29. ADD DEDUCTION CONTROLLER, MIGRATIONS, SEEDERS, FACADES
30. ADD OVERTIME CONTROLLER, MIGRATIONS, SEEDERS, FACADES   
31. ADD MODEL FOR PAYROLL
32. ADD MODEL FOR RATE 
33. ADD MODEL FOR DEDUCTION 
34. ADD MODEL FOR 
35. INSTALL PACKAGE-ICON
    -> https://boxicons.com/
    -> npm i boxicons --save
36. ADD LUCID-REACT ICONS AS UNIFORM AS OPTIMIZING THE PACKAGE AND TO BE FORMALIZE AS UNIFORM 
    ->npm i lucide-react
37. ADD CONNECTION CURRENT OR CONCURRENTLY 
    ->npm i -g concurrently








//NEW IMPLEMEMNTATION TO ACHIEVE THE REALTIME 
1. Set Up Laravel for Real-Time Events
Install Laravel Echo and Pusher
->composer require pusher/pusher-php-server
->npm install --save laravel-echo pusher-js























