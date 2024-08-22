# -*- coding: utf-8 -*-
{
    'name': "sz_plan",
    'summary': "Short (1 phrase/line) summary of the module's purpose",
    'description': """
        lrp plan for odoo
    """,
    'author': "ylhctec",
    'website': "https://www.ylhctec.com",
    'category': 'apps/plan',
    'version': '17.0.0.1',
    'depends': ['base', 'web'],
    'data': [
        'security/ir.model.access.csv',
        'views/sz_plan_menu.xml',
        'views/sz_plan_wizard.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'sz_plan/static/libs/tabulator/css/tabulator_simple.min.css',
            'sz_plan/static/css/style.scss',
            'sz_plan/static/libs/tabulator/js/tabulator.min.js',
            'sz_plan/static/src/sz_plan/*.*',
        ]
    }
}
