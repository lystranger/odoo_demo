# -*- coding: utf-8 -*-
{
    'name':
        "ylhc_sub_form",
    'summary':
        """"
        ylhc sub form for odoo
    """,
    'description':
        """
        ylhc sub form for odoo
    """,
    'author':
        "yuanli source driven techlogy",
    'website':
        "https://www.ylhctech.com",
    'category':
        "apps/sub_form",
    'version':
        '17.0.0.1',
    'depends': ['base', 'web'],
    'data': [],
    'price': 9999,
    'assets': {
        'web.assets_backend': [
            'ylhc_sub_form/static/src/ylhc_sub_form.js',
            'ylhc_sub_form/static/src/ylhc_sub_form.xml',
            'ylhc_sub_form/static/src/ylhc_view.js',
        ],
    },
}
