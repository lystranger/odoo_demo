# -*- coding: utf-8 -*-
# from odoo import http


# class LrpPlan(http.Controller):
#     @http.route('/sz_plan/sz_plan', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/sz_plan/sz_plan/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('sz_plan.listing', {
#             'root': '/sz_plan/sz_plan',
#             'objects': http.request.env['sz_plan.sz_plan'].search([]),
#         })

#     @http.route('/sz_plan/sz_plan/objects/<model("sz_plan.sz_plan"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('sz_plan.object', {
#             'object': obj
#         })

