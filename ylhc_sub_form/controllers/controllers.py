# -*- coding: utf-8 -*-
# from odoo import http


# class YlhcSubForm(http.Controller):
#     @http.route('/ylhc_sub_form/ylhc_sub_form', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/ylhc_sub_form/ylhc_sub_form/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('ylhc_sub_form.listing', {
#             'root': '/ylhc_sub_form/ylhc_sub_form',
#             'objects': http.request.env['ylhc_sub_form.ylhc_sub_form'].search([]),
#         })

#     @http.route('/ylhc_sub_form/ylhc_sub_form/objects/<model("ylhc_sub_form.ylhc_sub_form"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('ylhc_sub_form.object', {
#             'object': obj
#         })

