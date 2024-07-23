# -*- coding: utf-8 -*-
# from odoo import http


# class LrpPlan(http.Controller):
#     @http.route('/lrp_plan/lrp_plan', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/lrp_plan/lrp_plan/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('lrp_plan.listing', {
#             'root': '/lrp_plan/lrp_plan',
#             'objects': http.request.env['lrp_plan.lrp_plan'].search([]),
#         })

#     @http.route('/lrp_plan/lrp_plan/objects/<model("lrp_plan.lrp_plan"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('lrp_plan.object', {
#             'object': obj
#         })

