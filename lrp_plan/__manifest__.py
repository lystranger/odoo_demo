# -*- coding: utf-8 -*-
{
    'name': "lrp_plan",
    'summary': "Short (1 phrase/line) summary of the module's purpose",
    'description': """
        lrp plan for odoo
    """,
    'author': "ylhc",
    'website': "https://www.ylhctec.com",
    'category': 'apps/plan',
    'version': '17.0.0.1',
    'depends': ['base', 'web', 'ylhc_sub_form'],
    'data': [
        'security/ir.model.access.csv',
        'views/lrp_plan_menu.xml',
        'views/lrp_plan_wizard.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'lrp_plan/static/libs/tabulator/css/tabulator_simple.min.css',
            'lrp_plan/static/css/style.scss',
            'lrp_plan/static/libs/tabulator/js/tabulator.min.js',
            'lrp_plan/static/src/lrp_plan/*.*',
        ]
    }
}
