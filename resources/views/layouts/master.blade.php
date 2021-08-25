<!DOCTYPE html>
<html>

<head>
    @include('layouts.head')
</head>

<body class="theme-red">
    <!-- Page Loader -->
    @include('layouts.loader')
    <!-- #END# Page Loader -->
    <!-- Overlay For Sidebars -->
    <div class="overlay"></div>
    <!-- #END# Overlay For Sidebars -->
    
    <!-- Top Bar -->
    @include('layouts.topbar')
    <!-- #Top Bar -->
    <section>
        <!-- Left Sidebar -->
        @include('layouts.sidebar')
        <!-- #END# Left Sidebar -->
        <!-- Right Sidebar -->
        @include('layouts.sidebar-right')
        <!-- #END# Right Sidebar -->
    </section>

    <section class="content">
        <div class="container-fluid">
            @yield('content')
        </div>
    </section>

    @include('layouts.foot')
</body>

</html>
