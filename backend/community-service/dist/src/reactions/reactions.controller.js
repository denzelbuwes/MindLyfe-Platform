"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const reactions_service_1 = require("./reactions.service");
const dto_1 = require("./dto");
let ReactionsController = class ReactionsController {
    constructor(reactionsService) {
        this.reactionsService = reactionsService;
    }
    async add(dto, req) {
        return this.reactionsService.add(dto, req.user);
    }
    async remove(dto, req) {
        return this.reactionsService.remove(dto, req.user);
    }
    async list(query, req) {
        return this.reactionsService.list(query, req.user);
    }
    async getStatistics(query) {
        return this.reactionsService.getStatistics(query);
    }
    async getUserReactions(req, query) {
        return this.reactionsService.getUserReactions(req.user, query);
    }
};
exports.ReactionsController = ReactionsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Add a reaction (anonymous by default)' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.AddReactionDto, Object]),
    __metadata("design:returntype", Promise)
], ReactionsController.prototype, "add", null);
__decorate([
    (0, common_1.Delete)(),
    (0, swagger_1.ApiOperation)({ summary: 'Remove a reaction' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.RemoveReactionDto, Object]),
    __metadata("design:returntype", Promise)
], ReactionsController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'List reactions with anonymization' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ReactionsController.prototype, "list", null);
__decorate([
    (0, common_1.Get)('statistics'),
    (0, swagger_1.ApiOperation)({ summary: 'Get reaction statistics for content' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReactionsController.prototype, "getStatistics", null);
__decorate([
    (0, common_1.Get)('my-reactions'),
    (0, swagger_1.ApiOperation)({ summary: 'Get current user\'s reactions' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ReactionsController.prototype, "getUserReactions", null);
exports.ReactionsController = ReactionsController = __decorate([
    (0, swagger_1.ApiTags)('Reactions'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('reactions'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [reactions_service_1.ReactionsService])
], ReactionsController);
//# sourceMappingURL=reactions.controller.js.map